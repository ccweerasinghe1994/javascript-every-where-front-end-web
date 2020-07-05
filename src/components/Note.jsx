import React from 'react';
import ReactMarkDown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';

// Keep notes from extending wider than 800px
const StyledNote = styled.article`
max-width: 800px;
margin: 0 auto;
`;
// Style the note metadata
const MetaData = styled.div`
@media (min-width: 500px) {
display: flex;
align-items: top;
}
`;
// add some space between the avatar and meta info
const MetaInfo = styled.div`
padding-right: 1em;
`;
// align 'UserActions' to the right on large screens
const UserActions = styled.div`
margin-left: auto;
`;
const Note = ({ note }) => {
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img src={note.author.avatar} alt={`${note.author.userName} avatar`} height='50px'/>

        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note.author.userName} <br/>
          {format(note.createdAt, 'MMM Do YYYY')}
        </MetaInfo>
        <UserActions>
          {note.favoriteCount}
        </UserActions>
       <ReactMarkDown source={note.content}/>
      </MetaData>

    </StyledNote>
  );
};

export default Note;