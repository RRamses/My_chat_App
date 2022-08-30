import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  //recuperation des donnée saisie
  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);//on rappele au composant que l utilisateur est entrain de taper un message donc il dois recevoir  le props chatID
  };

  //envoie du message
  const handleSubmit = (event) => {
    event.preventDefault();//on empeche le navigateur de s actualisé inutilement

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');//on rend le imput vide apres avoir envoé notre message
  };
  
  //fonction d ajout d image
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      {/* code pour permetre l ajout d image*/}
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      {/* bouton d'ajout d'image*/}
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
