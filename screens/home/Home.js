import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, Image, Pressable, FlatList } from 'react-native';

import globalStyles from '../../assets/styles/globalStyles';
import style from './style';

import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Tab from '../../components/tab/Tab';
import {updateSelectedCategoryId, resetCategories} from '../../redux/reducers/Categories'


//import {updateFirstName, resetToInitialState} from '../../redux/reducers/User'

const Home = () => {
    const handleSearch = (val) => {
        console.log(val);
    };

    const dispatch = useDispatch();
    //  dispatch(resetCategories());
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);

    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const categoryPageSize  = 4;
    const [isLoadingCategories, setIsLoadingCategories] = useState(false)
    useEffect(()=>{
        setIsLoadingCategories(true);
        setCategoryList(pagination(categories.categories,categoryPage, categoryPageSize));
        setCategoryPage(prev => prev+1);
        setIsLoadingCategories(false);
    }, [])

    const pagination = (items, pageNumber, pageSize) =>{
        const startIndex = (pageNumber -1 ) * pageSize;
        const endIndex = startIndex + pageSize;

        if(startIndex>=items.length){
            return []
        }
        return items.slice(startIndex, endIndex);

    };



    const [isActive, setIsActive] = useState(true);
    return (
      <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
          <ScrollView showsVerticalScrollIndicator={false}>
              <View style={style.header}>
                  <View>
                      <Text style={style.headerIntroText}>Hello</Text>
                      <View>
                          <View style={style.userName}>
                              <Header title={user.firstName + ' ' + user.lastName[0] + '. 👋'}/>
                          </View>
                      </View>
                  </View>
                  <Image source={{ uri: user.profileImage }}
                         style={style.profileImage}
                         resizeMode={'contain'}
                  />

              </View>

              <View style={style.searchBox}>
                  <Search/>
              </View>
              <Pressable style={style.highlightedImageContainer}>
                  <Image source={require('../../assets/images/highlighted_image.png')}
                         resizeMode={'contain'}
                         style={style.highlightedImage}
                  />

              </Pressable>
              <View style={style.categoryHeader}>
                  <Header title={"Select category"} type={2}/>
               </View>

              <View style={style.categories}>

                  <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={()=>{
                        if(isLoadingCategories){
                            return
                        }
                        setIsLoadingCategories(true);
                        let newData = pagination(categories.categories, categoryPage, categoryPageSize);
                        if(newData.length>0){
                            setCategoryList(prev=>[...prev, ...newData]);
                            setCategoryPage(prev=> prev + 1)
                        }
                        setIsLoadingCategories(false);
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={categoryList}
                    renderItem={({ item }) =>
                      <View style={style.categoryItem} key={item.categoryId}>

                        <Tab
                          tabId = {item.categoryId}
                         onPress={()=>dispatch(updateSelectedCategoryId(item.categoryId))}
                          title={item.name}
                          isInactive={item.categoryId !== categories.selectedCategoryId}
                        >
                        </Tab>
                      </View>
                    }
                  />

              </View>


          </ScrollView>
      </SafeAreaView>
    );
};

export default Home;
