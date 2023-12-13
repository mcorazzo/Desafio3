import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { colors } from '../global/colors'

const ProductItem = ({product}) => {
  return (
    <View style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image
            style={styles.productImage}
            resizeMode='cover'
            source={{uri: product.thumbnail }}
        />
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    containerProductItem: {
        backgroundColor: colors.soft_orange,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        elevation: 7,
        shadowColor: colors.orange,
        shadowRadius: 2,
    },
    productTitle: {
        fontSize: 16,
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    productImage: {
        width: 60,
        height: 60,
        marginLeft: 10,
    }
});

