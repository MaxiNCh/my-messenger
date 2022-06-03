import { addChat, removeChat } from "../actionCreators"
import { chatsReducer, initialState } from "../reducer"

const state = [{
  name: 'Friends',
  id: '1'
},
{
  name: 'Job',
  id: '2'
}]
describe('Chats reducer', () => {
  it('removes chat by id', () => {
    const result = chatsReducer(state, removeChat('2'));

    expect(result.find((chat) => chat.id === '2')).toBeFalsy();
  })

  it('adds chat by id', () => {
    const result = chatsReducer(state, addChat({ name: 'test', id: '3' }));

    expect(result.find((chat) => chat.id === '3')).toBeTruthy();
  })
})
