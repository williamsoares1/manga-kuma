import { FlatList, Text } from "react-native";
import { MangaCard } from "../MangaCard/MangaCard";
import { styles } from "./styles";

export const MangaList = ({ navigation, mangas, ...rest }) => {
    return (
      <>
        {mangas != '' ?
        <FlatList
        data={mangas}
        renderItem={({ item }) =>
          <MangaCard item={item} navigation={navigation}
          />
        }
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        numColumns={2}
        style={styles.container}
        />
        :
        <Text style={styles.surprising}>Nenhum resultado encontrado</Text>  
      }
      </>
    )
}