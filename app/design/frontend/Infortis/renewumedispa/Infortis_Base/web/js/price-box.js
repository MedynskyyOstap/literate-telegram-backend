/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @api
 */
define([
    'jquery',
    'Magento_Catalog/js/price-utils',
    'underscore',
    'mage/template',
    'jquery/ui'
], function ($, utils, _, mageTemplate) {
    'use strict';

    var globalOptions = {
        productId: null,
        priceConfig: null,
        prices: {},
        priceTemplate: '<span class="price"><%- data.formatted %></span>'
    };

    $.widget('mage.priceBox', {
        options: globalOptions,

        /**
         * Widget initialisation.
         * Every time when option changed prices also can be changed. So
         * changed options.prices -> changed cached prices -> recalculation -> redraw price box
         */
        _init: function initPriceBox() {
            var box = this.element;

            box.trigger('updatePrice');
            this.cache.displayPrices = utils.deepClone(this.options.prices);
        },

        /**
         * Widget creating.
         */
        _create: function createPriceBox() {
            var box = this.element;

            this.cache = {};
            this._setDefaultsFromPriceConfig();
            this._setDefaultsFromDataSet();

            box.on('reloadPrice', this.reloadPrice.bind(this));
            box.on('updatePrice', this.onUpdatePrice.bind(this));
        },

        /**
         * Call on event updatePrice. Proxy to updatePrice method.
         * @param {Event} event
         * @param {Object} prices
         */
        onUpdatePrice: function onUpdatePrice(event, prices) {
            return this.updatePrice(prices);
        },

        /**
         * Updates price via new (or additional values).
         * It expects object like this:
         * -----
         *   "option-hash":
         *      "price-code":
         *         "amount": 999.99999,
         *         ...
         * -----
         * Empty option-hash object or empty price-code object treats as zero amount.
         * @param {Object} newPrices
         */
        updatePrice: function updatePrice(newPrices) {
            var prices = this.cache.displayPrices,
                additionalPrice = {},
                pricesCode = [],
                priceValue, origin, finalPrice;

            this.cache.additionalPriceObject = this.cache.additionalPriceObject || {};

            if (newPrices) {
                $.extend(this.cache.additionalPriceObject, newPrices);
            }

            if (!_.isEmpty(additionalPrice)) {
                pricesCode = _.keys(additionalPrice);
            } else if (!_.isEmpty(prices)) {
                pricesCode = _.keys(prices);
            }

            _.each(this.cache.additionalPriceObject, function (additional) {
                if (additional && !_.isEmpty(additional)) {
                    pricesCode = _.keys(additional);
                }
                _.each(pricesCode, function (priceCode) {
                    priceValue = additional[priceCode] || {};
                    priceValue.amount = +priceValue.amount || 0;
                    priceValue.adjustments = priceValue.adjustments || {};

                    additionalPrice[priceCode] = additionalPrice[priceCode] || {
                            'amount': 0,
                            'adjustments': {}
                        };
                    additionalPrice[priceCode].amount =  0 + (additionalPrice[priceCode].amount || 0) +
                        priceValue.amount;
                    _.each(priceValue.adjustments, function (adValue, adCode) {
                        additionalPrice[priceCode].adjustments[adCode] = 0 +
                            (additionalPrice[priceCode].adjustments[adCode] || 0) + adValue;
                    });
                });
            });

            if (_.isEmpty(additionalPrice)) {
                this.cache.displayPrices = utils.deepClone(this.options.prices);
            } else {
                _.each(additionalPrice, function (option, priceCode) {
                    origin = this.options.prices[priceCode] || {};
                    finalPrice = prices[priceCode] || {};
                    option.amount = option.amount || 0;
                    origin.amount = origin.amount || 0;
                    origin.adjustments = origin.adjustments || {};
                    finalPrice.adjustments = finalPrice.adjustments || {};

                    finalPrice.amount = 0 + origin.amount + option.amount;
                    _.each(option.adjustments, function (pa, paCode) {
                        finalPrice.adjustments[paCode] = 0 + (origin.adjustments[paCode] || 0) + pa;
                    });
                }, this);
            }

            this.element.trigger('reloadPrice');
        },

        /*eslint-disable no-extra-parens*/
        /**
         * Render price unit block.
         */
        reloadPrice: function reDrawPrices() {
            var priceFormat = (this.options.priceConfig && this.options.priceConfig.priceFormat) || {},
                priceTemplate = mageTemplate(this.options.priceTemplate);

            _.each(this.cache.displayPrices, function (price, priceCode) {
                price.final = _.reduce(price.adjustments, function (memo, amount) {
                    return memo + amount;
                }, price.amount);

                price.formatted = utils.formatPrice(price.final, priceFormat);
				
				//custom work by Mdeveloper
				var product_type=$('#product_type').val();
			    var subscription_active=$('#subscription_active').val();
			    var adjustmentfee=$('#adjustmentfee').val();
				var adjustmentfee_final;
				var original_price;
			    var response=$.parseJSON(adjustmentfee);
				var membership_label1=$('#membership_label1').val();
				var membership_label2=$('#membership_label2').val();
				var original_price=$('#product_price_original').val();
				var original_sprice=$('#product_sprice_original').val();
				//alert(parseFloat(original_price)+'=='+parseFloat(original_sprice));
                if(parseFloat(original_price)>parseFloat(original_sprice)){
					var mainprice = utils.formatPrice(original_price, priceFormat)
					var special_label=' Regular Price '+mainprice;
				}else{
					var special_label='';
				}
				if(original_sprice){
					original_price=original_sprice;
				}
				var op_price;
				var first_final;
				var price_onetime;
				if(typeof response =='object' && (product_type=='simple' || product_type=='virtual') && subscription_active==1 && (membership_label1!='' || membership_label2!='')){

				  $('.product-info-price').hide();
				  //var adjustmentfee=$('#adjustmentfee').val();
				  var instalmentfee=$('#instalmentfee').val();
				  var result = $.parseJSON(adjustmentfee);
				  var install_price = $.parseJSON(instalmentfee);
				  var current_val=$(".subscription select").val();
				  var x = $(".subscription select").find("option").length;
				  if(x==2){
					  //$('.subscription_select').hide();
					  $('.subscription_select').css("visibility","hidden");
					  $('.subscription_select').css("height",0);
				  }
				  $.each(result, function(k, v) { //alert(Math.sign(v));
					 if(k==current_val){
						if(v!='' || v!=null){
						$.each(install_price, function(k1, v1) {
						if(v1!='' || v1!=null){
							if(k1==current_val){
								op_price=price.final-original_price;
								first_final=parseFloat(v1)  + parseFloat(op_price);
								adjustmentfee_final=parseFloat(v1) + parseFloat(v) + parseFloat(op_price);//price.final
								//One Time or empty
								price_onetime=parseFloat(op_price)+parseFloat(original_price);
								if(price_onetime==undefined){
								price_onetime=parseFloat(original_price);	
								}
								if(Math.sign(v)==-1){
									adjustmentfee_final='yes';
								}
							}
							
							}							
						});					
						}										
					 }
				  });
				  
				  //First Label
				  if($('div.product-info-price1').length){
					var priceFinal = utils.formatPrice(first_final, priceFormat);
					    if(first_final && first_final!=NaN && first_final!=undefined){ //final price
						$(".product-info-price1").html('<div class="main-price-label">'+membership_label1+'</div><div class="main-price">'+priceFinal+special_label+'</div>');
							}else{
								if(price_onetime==undefined){ //if onetime & empty selection
								var priceFinal = utils.formatPrice(original_price, priceFormat);
								$(".product-info-price1").html('<div class="main-price-label">'+membership_label1+'</div><div class="main-price">'+priceFinal+special_label+'</div>');
							}else{
								//one time selection
								var priceFinal = utils.formatPrice(price_onetime, priceFormat);
								$(".product-info-price1").html('<div class="main-price-label">'+membership_label1+'</div><div class="main-price">'+priceFinal+special_label+'</div>');
								
							}
				
					    }  
				  }else{
					  /*var priceFinal = utils.formatPrice(price.final, priceFormat);
					  $(".product-info-price").after('<div class="product-info-price1" style="clear:both;"><div>'+membership_label1+'</div><div>'+priceFinal+'</div></div>');*/
					  var instalmentfee=$('#instalmentfee').val();
					  var adjustmentfee=$('#adjustmentfee').val();
					  //alert(instalmentfee+'=='+adjustmentfee);
					  if(instalmentfee=='undefined' && adjustmentfee=='undefined'){
						  var priceFinal = utils.formatPrice(price.final, priceFormat);
						  $(".product-info-price").after('<div class="product-info-price1 product-price-subscription" style="clear:both;"><div class="main-price-label">'+membership_label1+'</div><div class="main-price">'+priceFinal+'</div></div>');
					  }else{
						  $('.product-info-price').hide();
						  var priceFinal = utils.formatPrice(instalmentfee, priceFormat); 
						  $(".product-info-price").after('<div class="product-info-price1 product-price-subscription" style="clear:both;"><div class="main-price-label">'+membership_label1+'</div><div class="main-price">'+priceFinal+'</div></div>');
						  
						  adjustmentfee_final=parseFloat(instalmentfee) + parseFloat(adjustmentfee);
						  if(adjustmentfee){
						  var AddjpriceFinal = utils.formatPrice(adjustmentfee_final, priceFormat);
						  $(".product-info-price1").after('<div class="product-info-price2 product-price-subscription" style="clear:both;"><div class="first-price-label">'+membership_label2+'</div><div class="first-price">'+AddjpriceFinal+'</div></div>');
						  }
					  }
				  }
				  
                  //Second Label
				  //alert(adjustmentfee_final);
				  //adjustmentfee_final=parseFloat(0);
				  if((adjustmentfee_final || adjustmentfee_final=='yes') && $('div.product-info-price2').length){
					var AddjpriceFinal = utils.formatPrice(adjustmentfee_final, priceFormat);
					$(".product-info-price2").html('<div class="first-price-label">'+membership_label2+'</div><div class="first-price">'+AddjpriceFinal+'</div>');
					$(".product-info-price2").show();
				  }else if(adjustmentfee_final || adjustmentfee_final=='yes'){
				  var AddjpriceFinal = utils.formatPrice(adjustmentfee_final, priceFormat);
				  $(".product-info-price1").after('<div class="product-info-price2 product-price-subscription" style="clear:both;"><div class="first-price-label">'+membership_label2+'</div><div class="first-price">'+AddjpriceFinal+'</div></div>');
				  }else{
					$(".product-info-price2").hide();
				  }
				  
				}else if((product_type=='simple' || product_type=='virtual') && subscription_active==1 && (membership_label1!='' || membership_label2!='')){	

				  var instalmentfee=$('#instalmentfee').val();
				  var adjustmentfee=$('#adjustmentfee').val();
				  $('.product-info-price').hide();
				  var priceFinal = utils.formatPrice(instalmentfee, priceFormat); 
				  $(".product-info-price").after('<div class="product-info-price1 product-price-subscription" style="clear:both;"><div class="main-price-label">'+membership_label1+'</div><div class="main-price">'+priceFinal+'</div></div>');
				  
				  adjustmentfee_final=parseFloat(instalmentfee) + parseFloat(adjustmentfee);
				  if(adjustmentfee){
				  var AddjpriceFinal = utils.formatPrice(adjustmentfee_final, priceFormat);
				  $(".product-info-price1").after('<div class="product-info-price2 product-price-subscription" style="clear:both;"><div class="first-price-label">'+membership_label2+'</div><div class="first-price">'+AddjpriceFinal+'</div></div>');
			      }
				  
			    }
				//custom work by Mdeveloper

                $('[data-price-type="' + priceCode + '"]', this.element).html(priceTemplate({
                    data: price
                }));
            }, this);
        },

        /*eslint-enable no-extra-parens*/
        /**
         * Overwrites initial (default) prices object.
         * @param {Object} prices
         */
        setDefault: function setDefaultPrices(prices) {
            this.cache.displayPrices = utils.deepClone(prices);
            this.options.prices = utils.deepClone(prices);
        },

        /**
         * Custom behavior on getting options:
         * now widget able to deep merge of accepted configuration.
         * @param  {Object} options
         * @return {mage.priceBox}
         */
        _setOptions: function setOptions(options) {
            $.extend(true, this.options, options);

            if ('disabled' in options) {
                this._setOption('disabled', options.disabled);
            }

            return this;
        },

        /**
         * setDefaultsFromDataSet
         */
        _setDefaultsFromDataSet: function _setDefaultsFromDataSet() {
            var box = this.element,
                priceHolders = $('[data-price-type]', box),
                prices = this.options.prices;

            this.options.productId = box.data('productId');

            if (_.isEmpty(prices)) {
                priceHolders.each(function (index, element) {
                    var type = $(element).data('priceType'),
                        amount = parseFloat($(element).data('priceAmount'));

                    if (type && !_.isNaN(amount)) {
                        prices[type] = {
                            amount: amount
                        };
                    }
                });
            }
        },

        /**
         * setDefaultsFromPriceConfig
         */
        _setDefaultsFromPriceConfig: function _setDefaultsFromPriceConfig() {
            var config = this.options.priceConfig;

            if (config && config.prices) {
                this.options.prices = config.prices;
            }
        }
    });

    return $.mage.priceBox;
});