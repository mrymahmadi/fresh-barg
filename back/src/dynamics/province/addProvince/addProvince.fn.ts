import { ActFn } from "share/deps.ts";
import { province } from "../../../../mod.ts";
import { throwError } from "https://deno.land/x/lesan@v0.1.13/src/utils/throwError.ts";

export const addProvinceFn: ActFn = async (body) => {
	const {
		set: {
			name,
			enName,
			abb,
		},
		get,
	} = body.details;

	const existPvnc = await province.findOne({ filters: { name: name } });
	if (existPvnc) {
		throwError("this Province exist.");
	}
	const existPvncEn = await province.findOne({ filters: { enName: enName } });

	if (existPvncEn) {
		throwError("this Province exist.");
	}
	return await province.insertOne({
		doc: {
			name,
			enName,
			abb,
		},
		projection: get,
	});
};
