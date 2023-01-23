import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { TRootState, TAppDispatch } from "../store/store";



export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;