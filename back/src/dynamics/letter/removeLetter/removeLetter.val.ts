import { enums, object, optional, string } from "share/deps.ts";

export const removeLetterValidator = () => {
	return object({
		set: object({
			_id: string(),
		}),
		get: object({
			success: optional(enums([0, 1])),
		}),
	});
};