import { useCallback, useState } from "react";

export default function useDialogToggle<T>() {
  const [shouldDialogShow, setShouldDialogShow] = useState(false);
  const [propsData, setPropsData] = useState<T | null>(null);
  const closeDialog = useCallback(() => {
    setPropsData(null);
    setShouldDialogShow(false);
  }, []);
  const openDialog = useCallback((data?: T) => {
    if (data) setPropsData(data);
    setShouldDialogShow(true);
  }, []);
  return [shouldDialogShow, closeDialog, openDialog, propsData] as [
    boolean,
    () => void,
    (data?: T) => void,
    T
  ];
}
