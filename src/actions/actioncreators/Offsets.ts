
export function setOffset(key: string, top: number, left: number) {
  return {
    type: 'SET_OFFSET',
    key: key,
    offset: {
      top: top,
      left: left
    }
  };
}

export default { setOffset };
