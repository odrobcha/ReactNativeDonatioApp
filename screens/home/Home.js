import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView, Image, Pressable, FlatList } from 'react-native';

import globalStyles from '../../assets/styles/globalStyles';
import style from './style';

import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import Tab from '../../components/tab/Tab'

//import {updateFirstName, resetToInitialState} from '../../redux/reducers/User'

const Home = () => {

    const handleSearch = (val) => {
        console.log(val);

    };

    // const handlePress = () => {
    //     dispatch(updateFirstName({ firstName: 'Oksana' }));
    //
    // };
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);

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

              <View style={style.categories}>
                  <Text>TEst</Text>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={categories.categories}
                    renderItem={({ item }) =>
                      <View style={style.categoryItem} key={item.id}>
                        <Tab
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
