import { BuildPlatform, ApplicationDomain } from "models/Entities/Checkout";


export interface IENV {
	mode: string;
	IMAGE_URL: string;
	API_HEADER_NAME: string;
	API_HEADER_VALUE: string;
	API_URL: string;
	RPC_HEADER_NAME: string;
	RPC_HEADER_VALUE: string;
	RPC_URL: string;
	GOOGLE_ANALYTICS_TRACKING_ID: string;

	BUILD_PLATFORM: BuildPlatform;
	APPLICATION_DOMAIN: ApplicationDomain;
}
