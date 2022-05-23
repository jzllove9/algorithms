const remove = (list, endIndex) => {
  if (!list.head) return list;
  const func = (node, pre = null) => {
    if (!node) return 0;
    const currentIndex = func(node.next, node) + 1;
    if (currentIndex === endIndex) {
      if (pre) pre.next = node.next;
      node.next = null;
    }
    return currentIndex;
  };
  func(list.head);
  return list;
};

export default remove;
