/* eslint-disable no-unused-vars */
import React from 'react'
import DetailElement from '../../components/DetailElement/DetailElement'
import ImageColumn from '../../components/ImageColumn/ImageColumn'
import { useTranslation } from "react-i18next";
import { trackPromise } from 'react-promise-tracker';
import TextColumn from '../../components/TextColumn/TextColumn';
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './DetailPage.scss';

function DetailPage() {
  const [t, i18n] = useTranslation('global');
  const [character, setCharacter] = useState([]);
  const [house, setHouse] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const {data} = await axios.get('https://api.got.show/api/show/characters/Dickon Tarly');
      setCharacter(data);
    };

    const getHouse = async () => {
      const {data} = await axios.get('https://api.got.show/api/show/houses/' + character.house);
      setHouse(data);
    };

    trackPromise(
      getCharacter(),
      getHouse(),
    );
    
  }, [character.house]);

  return (
    <div className='c-detail'>
    {(character.length < 1 && house[0] !== null) ? <Loading /> : <>
    <DetailElement character={character} />
      <div className='c-detail--details'>
        <ImageColumn image={house.logoURL} title={t('detail.house')}/>
        <TextColumn elements={character.allegiances} title={t('detail.allegiances')} />
        <TextColumn elements={character.appearances} title={t('detail.appearances')} />
        <TextColumn elements={character.father} title={t('detail.father')} />
        <TextColumn elements={character.siblings} title={t('detail.siblings')} />
        <TextColumn elements={character.titles} title={t('detail.titles')} />
      </div>
    </>}
    </div>
  )
}

export default DetailPage