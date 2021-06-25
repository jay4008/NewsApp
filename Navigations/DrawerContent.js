import React from 'react';
// import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
      Text,
      StyleSheet,
      TouchableOpacity,
    } from 'react-native';
const DrawerContent = (props) => {
  const [drawerData, setDrawerData] = React.useState(["sports", "Movies","crime","State","Covid" ,"technology","science","world" , "Logout"]);





  return (
    <DrawerContentScrollView style = {{backgroundColor :"silver"}}>
        <Text style = {styles.categoryheader}>Category</Text>
        {
            drawerData.map((item, index)=>(
                <TouchableOpacity style = {drawerData.length-1 !== index ?  styles.categoryBtn :styles.logoutBtn}>
                    <Text style = {styles.categoryText}>
                        {
                            item
                        }
                    </Text>
                </TouchableOpacity>
            )

            )
        }
    </DrawerContentScrollView>
  );
};
export default DrawerContent;


const styles = StyleSheet.create({
categoryBtn :{width :"96%", alignItems :'center', paddingVertical: 10, marginTop:  5, backgroundColor: "#3498DB",marginHorizontal: "2%",borderRadius : 4}
,
logoutBtn :{width :"96%", alignItems :'center', paddingVertical: 10, marginTop:  40, backgroundColor: "#E67E22",marginHorizontal: "2%",borderRadius : 4}
,
categoryText:{color :"#fff"},
categoryheader:{alignSelf :'center',padding: 10, fontSize : 18, fontWeight :'700'},
})
