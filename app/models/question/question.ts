import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const QuestionModel = types
  .model("Question")
  .props({
    question_id: types.identifier,
    question: types.string,
    answer_type: types.maybe(types.string),
    answer: types.maybeNull(types.string),
    date_answered: types.maybeNull(types.Date),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type QuestionType = Instance<typeof QuestionModel>
export interface Question extends QuestionType {}
type QuestionSnapshotType = SnapshotOut<typeof QuestionModel>
export interface QuestionSnapshot extends QuestionSnapshotType {}
export const createQuestionDefaultModel = () => types.optional(QuestionModel, {})
