import { put, takeLatest, delay } from 'redux-saga/effects';
import { AUTHORS } from '../../utils/consts';
import { addMessage, addMessageWithReply, ADD_MESSAGE_WITH_REPLY } from './actionCreators';

function* onAddMessageWithReply({ type, payload }: ReturnType<typeof addMessageWithReply>) {
  yield put(addMessage(payload.chatId, payload.message));

  if (payload.message.author !== AUTHORS.robot) {
    yield delay(1500);
    yield put(addMessage(payload.chatId, {
      author: AUTHORS.robot,
      text: 'Response to your message',
      date: new Date(),
      id: `msg-id-${Date.now()}`
    }))
  }
}

function* addMessageFlow() {
  yield takeLatest(ADD_MESSAGE_WITH_REPLY, onAddMessageWithReply);
}

export default addMessageFlow;
