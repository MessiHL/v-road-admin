/*
 * @Description:
 * @Autor: hl
 * @Date: 2022-07-13 08:57:11
 * @LastEditors: hl
 * @LastEditTime: 2022-07-18 10:46:26
 */
import http from "@/api";
import { ResPage } from "../interface";

export const getUserList = (params: any) => {
	return http.post<ResPage<any>>(`/geeker/user/list`, params);
};
