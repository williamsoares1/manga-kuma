import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../components/Button";

const Usuario = () => {
    const { handleLogout } = useContext(AuthContext);
    return (
        <View style={{flex: 1, paddingTop: 60, alignItems: 'center'}}>
            <Text style={{ fontSize: 30 }}>Usuario </Text>
            
            <Button
                title="Sair"
                onPress={()=> handleLogout()}
                activeOpacity={0.7}
            />
            
        </View>
    )
}

export default Usuario