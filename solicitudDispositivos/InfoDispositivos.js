import * as Location from 'expo-location';
import * as Network from 'expo-network';
import * as Device from 'expo-device';
import { db } from "../DataBase/firebaseConfig";
import { collection, query, orderBy, limit, getDocs, setDoc, doc } from "firebase/firestore";

export const addSolicitud = async () => {
  try {
    const solicitudesRef = collection(db, "solicitudes");
    const q = query(solicitudesRef, orderBy("timestamp", "desc"), limit(1));
    const querySnapshot = await getDocs(q);
    let newId = 1;
    if (!querySnapshot.empty) {
      const lastDoc = querySnapshot.docs[0];
      const lastId = lastDoc.id;
      const lastNumber = parseInt(lastId.split('_')[1]);
      newId = lastNumber + 1;
    }

    const newDocId = `solicitud_${newId}`;

    let latitude = null, longitude = null;
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      latitude = location.coords.latitude;
      longitude = location.coords.longitude;
    } else {
      console.error("Permiso de ubicación no otorgado");
    }

    const ipAddress = await Network.getIpAddressAsync();

    await setDoc(doc(db, "solicitudes", newDocId), {
      usuario: "tecnico",
      estado: "pendiente",
      timestamp: new Date(),
      ubicacion: latitude && longitude ? { lat: latitude, lng: longitude } : null,
      ip: ipAddress || "No disponible",
      marca: Device.brand,
      modelo: Device.modelName,
    });

    console.log("Documento agregado con ID:", newDocId);
  } catch (error) {
    console.error("Error al agregar documento:", error);
  }
};
