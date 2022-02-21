import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

/**
 * Hook para uso do redux
 */
export function useRedux() {
    const useAppDispatch = () => useDispatch<AppDispatch>();
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    return { useAppDispatch, useAppSelector };
};


