import type {FontName} from "./types";

type CharacterMetrics = [number, number, number, number, number];
type FontMetrics = Record<number, CharacterMetrics>;

declare const fontMetricsData: Record<FontName, FontMetrics> & Record<string, FontMetrics>;

export default fontMetricsData;
