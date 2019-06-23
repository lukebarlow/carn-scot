import React from 'react'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import fileType from '../common/fileType.js'
import Piece from './Piece.js'

const StyledProjectPaginator = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const EndPadding = styled.div`
 width: 100vw;
 height: 100vh;
`

const ProjectArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 24px;
  margin-top: 8px;
  transform: translateY(-50%);

  img {
    display: block;
    width: auto;
    height: 32px;
  }
`

const ProjectTitle = styled.h1`
  position: relative;
  line-height: 0.9;
  top: -0.1em;
  width: 100%;
  margin: 0;
  color: white;
  font-size: 64px;
  font-weight: normal;
  text-align: center;
`

const ProjectLandingScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`

const ProjectVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: black;

  video {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
  }
`

const StyledImg = styled.img`
  display: block;
  width: auto;
  min-width: calc(100vw);
  min-height: calc(100vh);
  max-width: calc(100vmax);
  max-height: calc(100vmax);
  object-fit: cover;
  opacity: 0.9;
`

const StyledVideo = styled.video`
  display: block;
  width: auto;
  min-width: calc(100vw);
  min-height: calc(100vh);
`

export default ({ project, isCurrent = false, pieceIndex, onPieceClick, onImageLoad }) => (
  <StyledProjectPaginator>
    <ProjectLandingScreen backgroundImage={project.image} onClick={onPieceClick}>
      <ProjectVideoWrapper>
        { fileType(project.cover) === 'IMAGE' ?
          <StyledImg src={project.cover} />
          :
          <StyledVideo
            src={project.cover}
            poster={project.poster}
            muted
            autoPlay
            loop
            playsInline
          />
        }
      </ProjectVideoWrapper>
      <ProjectTitle iam='project-title'>
        {project.title}<br />
        <span style={{fontSize: '60%'}}>outdoor living in style</span>
        <MediaQuery minWidth={768}>
          <ProjectArrow>
            <img alt="" src="/img/arrow.svg" />
          </ProjectArrow>
        </MediaQuery>
      </ProjectTitle>
      
    </ProjectLandingScreen>
      { project.pieces.map((piece, i) => <Piece 
          key={i} 
          piece={piece} 
          shouldLoad={isCurrent && (i - pieceIndex < 3)} 
          onClick={onPieceClick}
          onImageLoad={onImageLoad}
        />)
      }
      <EndPadding />
    </StyledProjectPaginator>
)