var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Region2Muni_1 = new ol.format.GeoJSON();
var features_Region2Muni_1 = format_Region2Muni_1.readFeatures(json_Region2Muni_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region2Muni_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region2Muni_1.addFeatures(features_Region2Muni_1);
var lyr_Region2Muni_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region2Muni_1, 
                style: style_Region2Muni_1,
                popuplayertitle: 'Region 2-Muni',
                interactive: false,
                title: '<img src="styles/legend/Region2Muni_1.png" /> Region 2-Muni'
            });
var format_BufferedZone10km_2 = new ol.format.GeoJSON();
var features_BufferedZone10km_2 = format_BufferedZone10km_2.readFeatures(json_BufferedZone10km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferedZone10km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferedZone10km_2.addFeatures(features_BufferedZone10km_2);
var lyr_BufferedZone10km_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferedZone10km_2, 
                style: style_BufferedZone10km_2,
                popuplayertitle: 'Buffered Zone 10km',
                interactive: false,
                title: '<img src="styles/legend/BufferedZone10km_2.png" /> Buffered Zone 10km'
            });
var format_AFFECTEDFARMERS_3 = new ol.format.GeoJSON();
var features_AFFECTEDFARMERS_3 = format_AFFECTEDFARMERS_3.readFeatures(json_AFFECTEDFARMERS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFFECTEDFARMERS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFFECTEDFARMERS_3.addFeatures(features_AFFECTEDFARMERS_3);
var lyr_AFFECTEDFARMERS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AFFECTEDFARMERS_3, 
                style: style_AFFECTEDFARMERS_3,
                popuplayertitle: 'AFFECTED FARMERS',
                interactive: true,
    title: 'AFFECTED FARMERS<br />\
    <img src="styles/legend/AFFECTEDFARMERS_3_0.png" /> 1-2<br />\
    <img src="styles/legend/AFFECTEDFARMERS_3_1.png" /> 2-3<br />\
    <img src="styles/legend/AFFECTEDFARMERS_3_2.png" /> 3-4<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Region2Muni_1.setVisible(true);lyr_BufferedZone10km_2.setVisible(true);lyr_AFFECTEDFARMERS_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Region2Muni_1,lyr_BufferedZone10km_2,lyr_AFFECTEDFARMERS_3];
lyr_Region2Muni_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'fid': 'fid', 'ID_0_2': 'ID_0_2', 'ISO_2': 'ISO_2', 'NAME_0_2': 'NAME_0_2', 'ID_1_2': 'ID_1_2', 'NAME_1_2': 'NAME_1_2', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_BufferedZone10km_2.set('fieldAliases', {'id': 'id', 'Prov': 'Prov', 'Muni': 'Muni', 'Brgy': 'Brgy', 'No. farmer': 'No. farmer', 'Date': 'Date', });
lyr_AFFECTEDFARMERS_3.set('fieldAliases', {'Prov': 'Prov', 'Muni': 'Muni', 'Brgy': 'Brgy', 'No. farmer': 'No. farmer', 'Date': 'Date', });
lyr_Region2Muni_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'fid': 'TextEdit', 'ID_0_2': 'TextEdit', 'ISO_2': 'TextEdit', 'NAME_0_2': 'TextEdit', 'ID_1_2': 'TextEdit', 'NAME_1_2': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_BufferedZone10km_2.set('fieldImages', {'id': 'TextEdit', 'Prov': 'TextEdit', 'Muni': 'TextEdit', 'Brgy': 'TextEdit', 'No. farmer': 'TextEdit', 'Date': 'DateTime', });
lyr_AFFECTEDFARMERS_3.set('fieldImages', {'Prov': 'TextEdit', 'Muni': 'TextEdit', 'Brgy': 'TextEdit', 'No. farmer': 'TextEdit', 'Date': 'DateTime', });
lyr_Region2Muni_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'fid': 'no label', 'ID_0_2': 'no label', 'ISO_2': 'no label', 'NAME_0_2': 'no label', 'ID_1_2': 'no label', 'NAME_1_2': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_BufferedZone10km_2.set('fieldLabels', {'id': 'no label', 'Prov': 'no label', 'Muni': 'no label', 'Brgy': 'no label', 'No. farmer': 'no label', 'Date': 'no label', });
lyr_AFFECTEDFARMERS_3.set('fieldLabels', {'Prov': 'no label', 'Muni': 'no label', 'Brgy': 'no label', 'No. farmer': 'inline label - always visible', 'Date': 'no label', });
lyr_AFFECTEDFARMERS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});