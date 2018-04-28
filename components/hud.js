import React from 'react';

export default function HudHeader(){

    return (
          <div>
              <div id="hudHeader" className="overlayCountries noPointer">
                  <h1 className="noPointer">{'Small Arms and Ammunition — Imports & Exports'}
                      <div className="subtitle">{'An interactive visualization of government-authorized small arms and ammunition transfers from 1992 to 2010'}</div>
                  </h1>
              </div>

              <div className="overlayCountries noPointer" id="hudButtons">
                 <form>
                    <input type="button" value="SEARCH" className="searchBtn armsBtn pointer" />
                    <input type="text" name="country" className="countryTextInput pointer noMapDrag" value="UNITED STATES" />
                    <input type="button" value="—" className="zoomBtn zoomOutBtn armsBtn pointer noMapDrag" />
                    <input type="button" value="+" className="zoomBtn zoomInBtn armsBtn pointer noMapDrag" />
                    <input type="button" value="ABOUT" className="aboutBtn armsBtn pointer" /><br className="clear" />
                 </form>
              </div>
              <div id="history" className="overlayCountries noPointer">
                  <div className="graph">
                      <div className="close"></div>
                      <div className="labels">
                          <div className="change">{'RELATIVE PERCENT CHANGE'}</div>
                          <div className="exports">{'EXPORTS'}</div>
                          <div className="imports">{'IMPORTS'}</div><br className="clear" />
                      </div>
                      <div className="container noPointer"></div>
                  </div>
                  <ul className="timeline pointer">
                      <li>{'1992'}</li>
                      <li>{'93'}</li>
                      <li>{'94'}</li>
                      <li>{'95'}</li>
                      <li>{'96'}</li>
                      <li>{'97'}</li>
                      <li>{'98'}</li>
                      <li>{'99'}</li>
                      <li>{'2000'}</li>
                      <li>{'01'}</li>
                      <li>{'02'}</li>
                      <li>{'03'}</li>
                      <li>{'04'}</li>
                      <li>{'05'}</li>
                      <li>{'06'}</li>
                      <li>{'07'}</li>
                      <li>{'08'}</li>
                      <li>{'09'}</li>
                      <li>{'2010'}</li>
                      <div id="handle" className="noMapDrag"></div>
                  </ul>
              </div>
              <div id="graphIcon" className="overlayCountries"></div>
              <div id="importExportBtns" className="overlayCountries">
                  <div className="typeLabels">
                      <div className="mil">{'Military'}</div>
                      <div className="civ">{'Civilian'}</div>
                      <div className="ammo">{'Ammo'}</div><br className="clear" />
                  </div>
                  <div className="imports imex">
                      <div className="mil"><div className="check"></div></div>
                      <div className="civ"><div className="check"></div></div>
                      <div className="ammo"><div className="check"></div></div>
                      <div className="label">{'Imports'}</div><br className="clear" />
                  </div>
                  <div className="exports imex">
                      <div className="mil"><div className="check"></div></div>
                      <div className="civ"><div className="check"></div></div>
                      <div className="ammo"><div className="check"></div></div>
                      <div className="label">{'Exports'}</div><br className="clear" />
                  </div>
                  <br className="clear" />
              </div>

              <div id="aboutContainer" className='overlayCountries'>
                  <div className="arrowUp"></div>
                  <div id="aboutBox">
                      <div className="title">{'Information about the data'}</div>
                      <div className="text">
                         {' This data visualization was produced by Google as part of the'} <a href="http://www.google.com/ideas" target="_blank">{'Google Ideas'}</a> {'INFO (Illicit Networks, Forces in Opposition) Summit with support from the '}<a href="http://igarape.org.br/" target="_blank">{'Igarape Institute'} </a> {'and data provided by the '} <a href="http://www.prio.no/" target="_blank">{'Peace Research Institute Oslo (PRIO)'} </a>{' small arms database. The visualization includes >1 million individual import and export data points from annual custom reports and maps the transfer of small arms, light weapons and ammunition across 250 nation states and territories around the world between 1992 and 2010.'} 
                      </div>
                      <div className="links">
                         {' For more info, please see the'}  <a href="http://igarape.org.br/armsglobe" target="_blank">{'FAQs'}</a>
                      </div>
                  </div>
              </div>
        </div>)
        
}