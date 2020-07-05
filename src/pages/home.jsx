import React, { Fragment } from 'react';
import Button from '../components/button';
import { useQuery, gql } from '@apollo/client';
import ReactMarkDown from 'react-markdown';
import Note from '../components/Note';
import NoteFeed from '../components/NoteFeed';

const GetNotes = gql`
    query noteFeed($cursor:String) {
        noteFeed(cursor:$cursor) {
            notes {
                id
                content
                createdAt
                updatedAt
                favoriteCount
                author {
                    id
                    userName
                    avatar
                }
            }
            cursor
            hasNextPage
        }
    }

`;

const HomePage = () => {
  const { data, loading, fetchMore, error } = useQuery(GetNotes);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <Fragment>
      {
        <NoteFeed notes={data.noteFeed.notes}/>
      }
      {
        data.noteFeed.hasNextPage && <Button onClick={
          () => fetchMore({
            variables: {
              cursor: data.noteFeed.cursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              return {
                noteFeed: {
                  cursor: fetchMoreResult.noteFeed.cursor,
                  hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                  notes: [
                    ...previousResult.noteFeed.notes,
                    ...fetchMoreResult.noteFeed.notes

                  ],
                  __typename: 'noteFeed'
                }
              };
            }
          })

        }>Load More</Button>
      }

    </Fragment>
  );
};

export default HomePage;