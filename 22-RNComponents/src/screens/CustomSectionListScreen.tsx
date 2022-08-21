/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Thor", "Spiderman","Antman","Thor", "Spiderman","Antman", ]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama",]
  }
];

export const CustomSectionListScreen = () => {
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <SectionList
        sections={ casas }
        keyExtractor={ (item, index ) => item + index }
        renderItem={ ({ item }) => <Text>{ item }</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={ ({ section }) => (
          <View style={{ backgroundColor: 'white '}}>
            <HeaderTitle title={ section.casa } />
          </View>
        )}
      />
    </View>
  );
};
