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

import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { AbiList } from './AbiList';
import { interactActions } from '../../../../../../actions';
import { IDeployedContract } from '../../../../../../models/state';

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        getConstant: (abiIndex: number, deployedContract: IDeployedContract) => {
            dispatch(interactActions.getConstant(abiIndex, deployedContract));
        },
        sendTransaction: (deployedContract: IDeployedContract, abiDefinitionName: string, args?: any[]) => {
            dispatch(interactActions.sendTransaction(deployedContract, abiDefinitionName, args));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AbiList);
