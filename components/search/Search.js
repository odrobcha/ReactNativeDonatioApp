import React, {useRef, useState} from 'react';

import style from './style';
import PropTypes from 'prop-types'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import { TextInput, Pressable } from 'react-native';
import { scaleFontSize } from '../../assets/styles/scaling';

const Search = (props) =>{
    const [search, setSearch] = useState('');
    const textInputRef = useRef(null)
    const handleFocus = ()=>{
        textInputRef.current.focus();
    };
   const handleSearch = (searchVal)=>{
       setSearch(searchVal)
       props.onSearch(searchVal)
   }
    return(
      <Pressable style={style.searchInputContainer} onPress={handleFocus}>
          <FontAwesomeIcon icon={faSearch} color={'#25C0FF'} size={scaleFontSize(22)}/>
          <TextInput
            ref = {textInputRef}
            style={style.searchInput}
            value = {search}
            onChangeText={(value) => {handleSearch(value)}}

          />
      </Pressable>


    )
};

Search.defaultProps = {
        onSearch : () =>{}
};

Search.propTypes = {
    onSearch: PropTypes.func
}

export default Search;
