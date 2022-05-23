import { expect } from 'chai';
import DoublyLinkedListNode from './node.js';

describe('#数据结构专项：双链表 -- 双链表node类', () => {
  it('测试添加单一值', () => {
    const linkedList = new DoublyLinkedListNode(1);
    expect(linkedList.value).to.eql(1);
    expect(linkedList.next).to.be.null;
    expect(linkedList.prev).to.be.null;
  });

  it('连接三个节点', () => {
    const node1 = new DoublyLinkedListNode(1);
    const node2 = new DoublyLinkedListNode(2, node1, null);
    const node3 = new DoublyLinkedListNode(3, node2, node1);

    expect(node1.next).to.be.null;
    expect(node1.prev).to.be.null;
    expect(node1.value).eql(1);

    expect(node2.prev).eql(node1);
    expect(node2.next).null;
    expect(node2.value).eql(2);

    expect(node3.prev).eql(node2);
    expect(node3.next).eql(node1);
    expect(node3.value).eql(3);
  });

  it('toString', () => {
    const node = new DoublyLinkedListNode(1);

    expect(node.toString()).to.be.eql('1');

    node.value = 'string value';
    expect(node.toString()).to.be.eql('string value');
  });
});
