import React, { useState, useEffect } from "react";
import { FlatList, View, Image } from "react-native";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import { styles } from "./styles";
import { ImageObj } from "../../pages/capitulo/Capitulo";

type ImageListProps = {
    loadingImages: boolean[],
    images: ImageObj[],
    funcLoad: (index: number) => void
}

export const ImagesList = ({ loadingImages, images, funcLoad }: ImageListProps) => {
    const [dimensions, setDimensions] = useState<{ [key: number]: { width: number, height: number } }>({});

    const getImageSize = (uri: string, index: number) => {
        Image.getSize(uri, (width, height) => {
            setDimensions(prevDimensions => ({
                ...prevDimensions,
                [index]: { width, height }
            }));
        }, (error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        images.forEach((image, index) => {
            getImageSize(image.image, index);
        });
    }, [images]);

    const renderItem = ({ item, index }: { item: ImageObj, index: number }) => {
        const { width, height } = dimensions[index] || {};
        const aspectRatio = width && height ? width / height : 0.05;

        return (
            <View>
                {loadingImages[index] && <LoadingIndicator />}
                <Image
                    alt={item.title}
                    source={{ uri: item.image }}
                    style={[styles.image, { aspectRatio }]}
                    onLoad={() => funcLoad(index)}
                />
            </View>
        );
    };

    return (
        <FlatList
            style={styles.imageContainer}
            data={images}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            initialNumToRender={1}
            maxToRenderPerBatch={1}
            updateCellsBatchingPeriod={200}
            scrollEnabled={false}
        />
    );
};
