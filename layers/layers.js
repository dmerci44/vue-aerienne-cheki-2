var wms_layers = [];

var format_cheki2polyligne_0 = new ol.format.GeoJSON();
var features_cheki2polyligne_0 = format_cheki2polyligne_0.readFeatures(json_cheki2polyligne_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheki2polyligne_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheki2polyligne_0.addFeatures(features_cheki2polyligne_0);
var lyr_cheki2polyligne_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheki2polyligne_0, 
                style: style_cheki2polyligne_0,
                popuplayertitle: 'cheki 2 polyligne',
                interactive: true,
                title: '<img src="styles/legend/cheki2polyligne_0.png" /> cheki 2 polyligne'
            });
var format_RUISSEAUNGIDHA_1 = new ol.format.GeoJSON();
var features_RUISSEAUNGIDHA_1 = format_RUISSEAUNGIDHA_1.readFeatures(json_RUISSEAUNGIDHA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUISSEAUNGIDHA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUISSEAUNGIDHA_1.addFeatures(features_RUISSEAUNGIDHA_1);
var lyr_RUISSEAUNGIDHA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUISSEAUNGIDHA_1, 
                style: style_RUISSEAUNGIDHA_1,
                popuplayertitle: 'RUISSEAU NGIDHA',
                interactive: true,
                title: '<img src="styles/legend/RUISSEAUNGIDHA_1.png" /> RUISSEAU NGIDHA'
            });
var format_cheki2nuv_2 = new ol.format.GeoJSON();
var features_cheki2nuv_2 = format_cheki2nuv_2.readFeatures(json_cheki2nuv_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheki2nuv_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheki2nuv_2.addFeatures(features_cheki2nuv_2);
var lyr_cheki2nuv_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheki2nuv_2, 
                style: style_cheki2nuv_2,
                popuplayertitle: 'cheki 2 nuv',
                interactive: true,
                title: '<img src="styles/legend/cheki2nuv_2.png" /> cheki 2 nuv'
            });

lyr_cheki2polyligne_0.setVisible(true);lyr_RUISSEAUNGIDHA_1.setVisible(true);lyr_cheki2nuv_2.setVisible(true);
var layersList = [lyr_cheki2polyligne_0,lyr_RUISSEAUNGIDHA_1,lyr_cheki2nuv_2];
lyr_cheki2polyligne_0.set('fieldAliases', {'pol': 'pol', });
lyr_RUISSEAUNGIDHA_1.set('fieldAliases', {'GF': 'GF', });
lyr_cheki2nuv_2.set('fieldAliases', {'uj': 'uj', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_cheki2polyligne_0.set('fieldImages', {'pol': '', });
lyr_RUISSEAUNGIDHA_1.set('fieldImages', {'GF': '', });
lyr_cheki2nuv_2.set('fieldImages', {'uj': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_cheki2polyligne_0.set('fieldLabels', {'pol': 'no label', });
lyr_RUISSEAUNGIDHA_1.set('fieldLabels', {'GF': 'no label', });
lyr_cheki2nuv_2.set('fieldLabels', {'uj': 'no label', });
lyr_cheki2nuv_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});