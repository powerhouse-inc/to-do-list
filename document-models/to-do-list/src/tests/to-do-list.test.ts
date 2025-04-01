/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import utils from '../../gen/utils';
import { reducer } from '../../gen/reducer';
import * as creators from '../../gen/to-do-list/creators';
import { ToDoListDocument } from '../../gen/types';

describe('Todolist Operations', () => {
    let document: ToDoListDocument;

    beforeEach(() => {
        document = utils.createDocument();
    });

    it('should handle addTodoItem operation', () => {
        const input = {
            id: '1',
            text: 'Buy milk',
        };
        const updatedDocument = reducer(
            document,
            creators.addTodoItem(input),
        );

        expect(updatedDocument.operations.global).toHaveLength(1);
        expect(updatedDocument.operations.global[0].type).toBe(
            'ADD_TODO_ITEM',
        );
        expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
        expect(updatedDocument.operations.global[0].index).toEqual(0);
        expect(updatedDocument.state.global.items).toHaveLength(1);
    });
    it('should handle updateTodoItem operation', () => {
        const addInput = {
            id: '1',
            text: 'Buy milk',
        };
        const updateInput = {
            id: '1',
            text: 'Buy bread',
        };
        const createdDocument = reducer(
            document,
            creators.addTodoItem(addInput),
        );
        const updatedDocument = reducer(
            createdDocument,
            creators.updateTodoItem(updateInput),
        );

        expect(updatedDocument.operations.global).toHaveLength(2);
        expect(updatedDocument.operations.global[1].type).toBe(
            'UPDATE_TODO_ITEM',
        );
        expect(updatedDocument.operations.global[1].input).toStrictEqual(updateInput);
        expect(updatedDocument.operations.global[1].index).toEqual(1);
        expect(updatedDocument.state.global.items[0].text).toBe(updateInput.text);
    });
    it('should handle deleteTodoItem operation', () => {
        const addInput = {
            id: '1',
            text: 'Buy milk',
        };
        const deleteInput = {
            id: '1',
        };
        const createdDocument = reducer(
            document,
            creators.addTodoItem(addInput),
        );
        const updatedDocument = reducer(
            createdDocument,
            creators.deleteTodoItem(deleteInput),
        );

        expect(updatedDocument.operations.global).toHaveLength(2);
        expect(updatedDocument.operations.global[1].type).toBe(
            'DELETE_TODO_ITEM',
        );
        expect(updatedDocument.operations.global[1].input).toStrictEqual(deleteInput);
        expect(updatedDocument.operations.global[1].index).toEqual(1);
        expect(updatedDocument.state.global.items).toHaveLength(0);
    });
});
