import { boolean, number, object, objectIdValidation, string } from "deps";
import { QuestionType } from "share/schemas/mod.ts";
import { selectStruct } from "../../../../mod.ts";

export const addQuestionValidator = () => {
	return object({
		set: object({
			order: number(),
			label: string(),
			isActive: boolean(),
			questionType: QuestionType,

			formId: objectIdValidation,
			orgId: objectIdValidation,
			unitId: objectIdValidation,
		}),
		get: selectStruct("question", 1),
	});
};
