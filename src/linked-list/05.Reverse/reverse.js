const reverse = (list, start, end) => {
  if (!list) return [];
  if (!list.head || !list.head.next) return list;
  let i = 1;
  let prev = null;
  let current = list.head;
  while (i < start) {
    prev = current;
    current = current.next;
    i++;
  }

  const leftPrev = prev;
  const tail = current;

  let _next = current.next;
  while (i < end && _next) {
    prev = current;
    current = _next;
    if (_next.next) {
      _next = _next.next;
    } else {
      _next = null;
    }
    current.next = prev;
    i++;
  }

  leftPrev.next = current;
  tail.next = _next;
  return list;
};

export default reverse;
