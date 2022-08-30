const MyMessage = ({ message }) => {
  // d abords on verifie si le message est un message ou un image , superieur a 0 c est une image 
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file} // obtenir la source du message puis on vas chercher le fichiers
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }
 // cas de inferieur a 0 c'est un message
  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text}{/* le contenu de notre message*/}
    </div>
  );
};

export default MyMessage;
