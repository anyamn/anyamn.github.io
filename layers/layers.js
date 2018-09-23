var wms_layers = [];

        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'GoogleSatelliteHybrid_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });var format_Cimetire_1 = new ol.format.GeoJSON();
var features_Cimetire_1 = format_Cimetire_1.readFeatures(json_Cimetire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cimetire_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Cimetire_1.addFeatures(features_Cimetire_1);var lyr_Cimetire_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cimetire_1, 
                style: style_Cimetire_1,
                title: '<img src="styles/legend/Cimetire_1.png" /> Cimetiére'
            });

lyr_Cimetire_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Cimetire_1];
lyr_Cimetire_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name_POI_F': 'Name_POI_F', });
lyr_Cimetire_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name_POI_F': 'TextEdit', });
lyr_Cimetire_1.set('fieldLabels', {'OBJECTID': 'no label', 'Name_POI_F': 'no label', });
lyr_Cimetire_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});