import CircularLinkedListNode from './node.js';
import { expect } from 'chai'


describe('#测试环链表node类', () => {
  it('使用值作为参数创建一个节点', () => {
    const node = new CircularLinkedListNode(1);

    expect(node.value).eql(1);
    expect(node.prev).null;
    expect(node.next).null;
  });

  it('使用对象作为参数创建一个节点', () => {
    const node = new CircularLinkedListNode({ value: 1, key: 'test' });

    expect(node.value.value).eql(1);
    expect(node.value.key).eql('test');
    expect(node.prev).null;
    expect(node.next).null;
  });

  it('连接两个节点', () => {
    const node2 = new CircularLinkedListNode(2);
    const node1 = new CircularLinkedListNode(1, null, node2);
    const node3 = new CircularLinkedListNode(10, node2, node1);

    expect(node1.next).exist;
    expect(node1.prev).null;
    expect(node2.next).null;
    expect(node2.prev).null;
    expect(node3.next).exist;
    expect(node3.prev).exist;
    expect(node1.value).eql(1);
    expect(node1.next.value).eql(2);
    expect(node3.next.value).eql(1);
    expect(node3.prev.value).eql(2);
  });

  it('toString', () => {
    const node = new CircularLinkedListNode(1);
    expect(node.toString()).eql('1');

    node.value = 'string value';
    expect(node.toString()).eql('string value');
  });
})

