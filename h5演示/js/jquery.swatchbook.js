/**
 * jquery.swatchbook.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;(function($, window, undefined ) {
	
	'use strict';

	// global ȫ��
	var Modernizr = window.Modernizr;//��¶һ��Modernizrȫ�ֶ���

	jQuery.fn.reverse = [].reverse;//Ϊjquery���һ������
	
	$.SwatchBook = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	$.SwatchBook.defaults = {
		//���Ӵ򿪵ĽǶ�
		center : 6,
		//ÿ����Ҷ�Ķ���
		angleInc : 8,
		speed : 700,//���������õ�ʱ��
		easing : 'ease',//��������Ƕ���������ease�ǻ�����˼
		// �ڵ����һ����Ҷʱ�������ĽǶȲ��������
		proximity : 45,
		// amount in degrees between the opened item's next siblings
		neighbor : 4,//��������
		// �ڸ����϶���
		onLoadAnim : true,
		// �����Ĭ�ϵĹر�
		initclosed : false,
		// �������Ԫ�ص�����ʱ���ᴥ������/�رչ���
		// Ĭ�������û��������Ԫ��
		closeIdx : -1,
		// ��һ���ض�
		// ����Ŀ���������ǳ�ʼ����
		openAt : -1
	};

	$.SwatchBook.prototype	= {

		_init : function( options ) {
			
			this.options = $.extend( true, {}, $.SwatchBook.defaults, options );

			this.$items = this.$el.children( 'div' );
			this.itemsCount = this.$items.length;
			this.current = -1;
			this.support = Modernizr.csstransitions;
			this.cache = [];
			
			if( this.options.onLoadAnim ) {
				this._setTransition();
			}

			if( !this.options.initclosed ) {
				this._center( this.options.center, this.options.onLoadAnim );
			}
			else {

				this.isClosed = true;
				if( !this.options.onLoadAnim ) {
					this._setTransition();
				}

			}

			if( this.options.openAt >= 0 && this.options.openAt < this.itemsCount ) {
				this._openItem( this.$items.eq( this.options.openAt ) );
			}
			
			this._initEvents();
			
		},
		_setTransition : function() {
		

			if( this.support ) {
				this.$items.css( { 'transition': 'all ' + this.options.speed + 'ms ' + this.options.easing } );
			}

		},
		_openclose : function() {

		
		
		  var particle, theta, force, touch, max, i, j, n;

            for ( i = 0, n = demo.touches.length; i < n; i++ ) {

                touch = demo.touches[i], max = random( 300, 200);
                for ( j = 0; j < max; j++ ) {
                  demo.spawn( touch.x, touch.y );
                }

            }

			this.isClosed ? this._center( this.options.center, true ) : this.$items.css( { 'transform' : 'rotate(0deg)' } );
			this.isClosed = !this.isClosed;

		},
		_center : function( idx, anim ) {

			var self = this;

			this.$items.each( function( i ) {

				var transformStr = 'rotate(' + ( self.options.angleInc * ( i - idx ) ) + 'deg)';
				$( this ).css( { 'transform' : transformStr } );

			} );

		},
		_openItem : function( $item ) {

			
			var itmIdx = $item.index();
			
			if( itmIdx !== this.current ) {

				if( this.options.closeIdx !== -1 && itmIdx === this.options.closeIdx ) {

					this._openclose();
					this._setCurrent();

				}
				else {

					this._setCurrent( $item );
					$item.css( { 'transform' : 'rotate(0deg)' } );
					this._rotateSiblings( $item );

				}

			}

		},
		_initEvents : function() {

			var self = this;
			
			this.$items.on( 'click.swatchbook', function( event ) {
				self._openItem( $( this ) );
			} );

		},
		_rotateSiblings : function( $item ) {
		
		
			var self = this,
				idx = $item.index(),
				$cached = this.cache[ idx ],
				$siblings;

			if( $cached ) {
				$siblings = $cached;
			}
			else {

				$siblings = $item.siblings();
				this.cache[ idx ] = $siblings;
				
			}

			$siblings.each( function( i ) {

				var rotateVal = i < idx ? 
					self.options.angleInc * ( i - idx ) : 
					i - idx === 1 ?
						self.options.proximity : 
						self.options.proximity + ( i - idx - 1 ) * self.options.neighbor;

				var transformStr = 'rotate(' + rotateVal + 'deg)';

				$( this ).css( { 'transform' : transformStr } );

			} );

		},
		_setCurrent : function( $el ) {

			this.current = $el ? $el.index() : -1;
			this.$items.removeClass( 'ff-active' );
			if( $el ) {
				$el.addClass( 'ff-active' );
			}

		}

	};
	
	var logError			= function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.swatchbook			= function( options ) {
		
		var instance = $.data( this, 'swatchbook' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on swatchbook prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for swatchbook instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'swatchbook', new $.SwatchBook( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );