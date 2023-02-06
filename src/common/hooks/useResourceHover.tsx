import useReferencesStore, {RefTypes} from "@src/apps/store/refsRegister";

const useResourceHover = () => {
  const getRef = useReferencesStore(state => state.getRef);

  return (id:string, type:RefTypes) => (isMouseOver:boolean) => getRef(id, type)?.current?.setHovered(isMouseOver);
}

export default useResourceHover;
