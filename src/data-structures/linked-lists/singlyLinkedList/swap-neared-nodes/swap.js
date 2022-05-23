const swap = (list) => {
  if (!list.head) return list;
  let p = list.head;
  let q = p.next;
  while (p && q) {
    [p.value, q.value] = [q.value, p.value];
    p = q.next;
    q = p ? p.next : null;
  }
  return list;
};
export default swap;
