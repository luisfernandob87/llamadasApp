import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  View,
  Modal,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import moment from "moment/moment";
import "moment/locale/es";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";

const Llamada = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleJefeInmediato, setModalVisibleJefeInmediato] =
    useState(false);
  const [modalVisibleRrhh, setModalVisibleRrhh] = useState(false);

  const [selected, setSelected] = useState("");
  const [selectedDepto, setSelectedDepto] = useState("");
  const [selectedPuesto, setSelectedPuesto] = useState("");
  const [selectedGrado, setSelectedGrado] = useState("");
  const [data, setData] = useState([]);
  const [dataDepto, setDataDepto] = useState([]);
  const [dataPuesto, setDataPuesto] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [compromiso, setCompromiso] = useState("");
  const [accionCorrectiva, setAccionCorrectiva] = useState("");
  const [proximoGrado, setProximoGrado] = useState("");
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    axios
      .get("https://anvar-demo.onrender.com/api/empleados")
      .then((res) => {
        let newArray = res.data.data.map((item) => {
          return { key: item.id, value: item.attributes.nombreCompleto };
        });
        setData(newArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>
      <Text style={{ padding: 10, textAlign: "center" }}>
        FORMATO DE ASESORÍA PARA MEJORAR
      </Text>
      <View style={{ padding: 10 }}>
        <SelectList
          setSelected={setSelected}
          data={data}
          placeholder="Nombre colaborador (a):"
          searchPlaceholder="Buscar"
        />
      </View>
    </ScrollView>
  );
};

export default Llamada;

const styles = StyleSheet.create({});
