import { IViewState } from "../components/map-controls/types";

export const defaultState: IViewState = {
  longitude: 172.639847,
  latitude: -43.52565,
  zoom: 9,
};


export const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN