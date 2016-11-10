import {Component, OnInit, Input} from '@angular/core';

import {TweetService} from "../tweet/tweet.service";


declare var google : any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private tweetService : TweetService){

  }
  zoom = true;
  // rectangle:any;
  map:any;
  // infoWindow:any;
  // coords:any;
  // polygon:any;


  private addMarker = (tweet) => {
    console.log(tweet);
    var myLatlng = new google.maps.LatLng(tweet.latitude,tweet.longitude);
    var marker = new google.maps.Marker({
      position: myLatlng,
      icon: tweet.image,
      animation: google.maps.Animation.DROP,
      title:tweet.user
    });
    marker.setMap(this.map);
    if(this.zoom){
      this.map.setCenter(new google.maps.LatLng(tweet.latitude,tweet.longitude));
      this.map.setZoom(20);
    }

  }
  ngOnInit() {
    google.maps.event.addDomListener(window, 'load', this.initialize);
    // Define an info window on the map.

  }

  private initialize = () => {
    //let createRect = this.showNewRect;
    var mapOptions = {
      center: new google.maps.LatLng(25.79065, -80.13005),
      zoom: 15
    };
    this.map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    // var shapeOptions = {
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 0.8,
    //   strokeWeight: 3,
    //   fillColor: '#FF0000',
    //   fillOpacity: 0.35,
    //   editable: true,
    //   draggable: true, /* It doesn't seem to work */
    //   clickable: true
    // };
    // //https://developers.google.com/maps/documentation/javascript/examples/rectangle-event
    // var drawingManager = new google.maps.drawing.DrawingManager({
    //   //drawingMode: google.maps.drawing.OverlayType.MARKER,
    //   drawingControl: true,
    //   drawingControlOptions: {
    //     position: google.maps.ControlPosition.TOP_CENTER,
    //     drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
    //   },
    //
    //     // drawingModes: [
    //     //   google.maps.drawing.OverlayType.MARKER,
    //     //   google.maps.drawing.OverlayType.CIRCLE,
    //     //   google.maps.drawing.OverlayType.POLYGON,
    //     //   google.maps.drawing.OverlayType.POLYLINE,
    //     //   google.maps.drawing.OverlayType.RECTANGLE
    //     // ],
    //   rectangleOptions: shapeOptions,
    //   //circleOptions: shapeOptions,
    //   Options: shapeOptions,
    //
    //
    // });
    // drawingManager.setMap(this.map);
    // google.maps.event.addListener(drawingManager, 'rectanglecomplete', function (shape) {
    //   this.infoWindow = new google.maps.InfoWindow();
    //   var changed = () => {
    //     var ne = shape.getBounds().getNorthEast();
    //     var sw = shape.getBounds().getSouthWest();
    //     var contentString = '<b>Rectangle moved.</b><br>' +
    //       'New north-east corner: ' + ne.lat() + ', ' + ne.lng() + '<br>' +
    //       'New south-west corner: ' + sw.lat() + ', ' + sw.lng();
    //
    //     // Set the info window's content and position.
    //     this.infoWindow.setContent(contentString);
    //     this.infoWindow.setPosition(ne);
    //
    //     this.infoWindow.open(this.map);
    //     console.log(shape.getBounds());
    //   }
    //   changed();
    //   shape.addListener('bounds_changed',changed)
    //
    //   // this.rectangle = shape;
    //   // this.rectangle.setMap(this.map);
    //   //this.rectangle.addListener('bounds_changed', this.showNewRect);
    //
    //   // createRect();
    //   // console.log(shape);
    //   //   console.log(this.map.getBounds());
    //
    //   // console.log(polygon);
    //   // var coordinates = (polygon.getPath().getArray());
    //   // console.log(polygon);
    //   // console.log(coordinates);
    //   // this.coords = coordinates;
    //   // this.polygon = polygon;
    //
    //
    // });

    this.tweetService.tweetSourceHasLocation$.subscribe(this.addMarker);
  }

  // private showNewRect = () =>{
  //   var ne = this.rectangle.getBounds().getNorthEast();
  //   var sw = this.rectangle.getBounds().getSouthWest();
  //
  //   var contentString = '<b>Rectangle moved.</b><br>' +
  //     'New north-east corner: ' + ne.lat() + ', ' + ne.lng() + '<br>' +
  //     'New south-west corner: ' + sw.lat() + ', ' + sw.lng();
  //
  //   // Set the info window's content and position.
  //   this.infoWindow.setContent(contentString);
  //   this.infoWindow.setPosition(ne);
  //
  //   this.infoWindow.open(this.map);
  // }
}
