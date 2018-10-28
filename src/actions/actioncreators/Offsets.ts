export function setOffset(key: string, top: number, left: number) {
  return {
    type: "SET_OFFSET",
    key,
    offset: {
      top,
      left
    }
  };
}

export default { setOffset };
