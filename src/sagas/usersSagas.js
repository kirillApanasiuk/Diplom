import { call, put, takeEvery } from "@redux-saga/core/effects";
import { GET_PERMISSION_ACTIONS } from "../redux/actions/permissionActions";
import { getPermissionsActions } from "../redux/getPermisssionActions";
import {permissionApi} from "./permissionSagas"


function* getUsersSaga(){
    try {
        const result = yield call(permissionApi.getPermissions);

        yield put(getPermissionsActions.success(result));
    } catch (error) {
        yield put(getPermissionsActions.error(error))
    }
}

export default function* permissionSagas(){
    yield takeEvery(GET_PERMISSION_ACTIONS.REQUEST, getUsersSaga);
}