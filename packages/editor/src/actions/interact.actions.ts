// Copyright 2019 Superblocks AB
//
// This file is part of Superblocks Lab.
//
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
//
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import { IDeployedContract } from '../models/state';

export const interactActions = {

    TOGGLE_INTERACT_TREE_ITEM: 'TOGGLE_INTERACT_TREE_ITEM',
    toggleInteractTreeItem(id: string) {
        return {
            type: interactActions.TOGGLE_INTERACT_TREE_ITEM,
            data: { id }
        };
    },

    GET_CONSTANT: 'GET_CONSTANT',
    getConstant(abiIndex: number, deployedContract: IDeployedContract) {
        return {
            type: interactActions.GET_CONSTANT,
            data: { abiIndex, deployedContract }
        };
    },

    GET_CONSTANT_SUCCESS: 'GET_CONSTANT_SUCCESS',
    getConstantSuccess(deployedContractId: string, abiIndex: number, result: string) {
        return {
            type: interactActions.GET_CONSTANT_SUCCESS,
            data: { deployedContractId, abiIndex, result }
        };
    },

    GET_CONSTANT_FAIL: 'GET_CONSTANT_FAIL',
    getConstantFail(error: any) {
        return {
            type: interactActions.GET_CONSTANT_FAIL,
            data: error
        };
    },

    SEND_TRANSACTION: 'SEND_TRANSACTION',
    sendTransaction(deployedContract: IDeployedContract, rawAbiDefinitionName: string, args?: any[]) {
        return {
            type: interactActions.SEND_TRANSACTION,
            data: { deployedContract, rawAbiDefinitionName, args }
        };
    },

    SEND_TRANSACTION_SUCCESS: 'SEND_TRANSACTION_SUCCESS',
    sendTransactionSuccess(result: any) {
        return {
            type: interactActions.SEND_TRANSACTION_SUCCESS,
            data: { result }
        };
    },

    SEND_TRANSACTION_FAIL: 'SEND_TRANSACTION_FAIL',
    sendTransactionFail(error: any) {
        return {
            type: interactActions.SEND_TRANSACTION_FAIL,
            data: error
        };
    }
};

