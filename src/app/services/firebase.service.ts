import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
	listings: FirebaseListObservable<any[]>;
	listing: FirebaseObjectObservable<any[]>;
	constructor(private af : AngularFire) { };

	getListings(){
		this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>;
		return this.listings;
	}

	getListingDetail(id){
		this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
		return this.listing;
	}

	addListing(listing){
		console.log("add listing");
	}
}

interface Listing{
	$key?:string,
	title?:string,
	type?:string,
	image?:string,
	city?:string,
	owner?:string,
	bedrooms?:string
}