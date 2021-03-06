import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: rgba(0, 0, 0, 0.6);
    width: 90%;
    color: white;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    text-align: left;
    box-shadow: rgba(0, 0, 0, 0.8) 4px 4px;
    transition: ease-in-out 0.05s;
    &:hover {
        transform: translate(-2px,-2px);
        box-shadow: rgba(0, 0, 0, 0.8) 6px 6px;
    }
    &:active {
        transform: translate(1px,1px);
        box-shadow: rgba(0, 0, 0, 0.8) 3px 3px;
    }
`

const Thumbnail = styled.img`
    height: 60px;
    width: 60px;
    margin: 10px;
`

const SongDeets = styled.div`
    display: flex;
    flex-direction: column;
`

const SongTitle = styled.h5`
    margin: 5px;
`

const SongArtist = styled.p`
    margin: 5px;
`

const Song = ({song}) => {
    return(
        <>
        <Wrapper>
        <Thumbnail src={song.album.images[0].url} />
          <SongDeets>
            <SongTitle>
                {song.name}
            </SongTitle>
            <SongArtist>
                {`${song.artists[0].name}`}
            </SongArtist>
            </SongDeets>
        </Wrapper>
        </>
    )
}

export default Song;
