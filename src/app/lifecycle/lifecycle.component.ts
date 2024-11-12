import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  // Dit is de eerste methode die wordt aangeroepen wanneer de component wordt gemaakt. Wordt gebruikt om basisinstellingen of initiële waarden te definiëren, maar er is nog geen toegang tot de Angular-specifieke injecties en de component is nog niet volledig geconfigureerd.
  constructor() {
    console.log('CONSTRUCTOR');
    //console.log(this.text);
  }

  // Deze methode wordt aangeroepen na de constructor en nadat Angular de ingevoerde bindings heeft geïnitialiseerd. Dit is een geschikte plaats om initiële opzet of logica te plaatsen, omdat op dit moment alle bindings klaar zijn. Het is de eerste officiële Angular-lifecycle hook.
  ngOnInit() {
    console.log('ngOnInit');
    //console.log(this.text);
  }

  // Wordt aangeroepen wanneer één of meer bindings van de component wijzigen. De changes parameter bevat een object dat informatie geeft over de waarden die zijn veranderd. Deze hook wordt elke keer aangeroepen als een input-binding wordt gewijzigd.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // Wordt aangeroepen wanneer Angular detecteert dat er een verandering is die het niet via ngOnChanges kan volgen. Dit wordt vaak gebruikt om handmatig te reageren op wijzigingen.
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // Wordt aangeroepen nadat Angular externe content in de component heeft geplaatst. Dit kan bijvoorbeeld content uit een andere component zijn die in deze component wordt weergegeven (ng-conent).
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // Wordt aangeroepen elke keer nadat Angular de ingevoegde content heeft gecontroleerd op veranderingen. Deze hook is handig voor extra validatie van wijzigingen in ingevoegde content.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // Dit wordt aangeroepen nadat de componentweergave en eventuele kindweergaven zijn geïnitialiseerd. Dit is handig om logica uit te voeren die afhankelijk is van het volledig laden van de component en kindcomponenten.
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // Wordt aangeroepen elke keer nadat Angular de componentweergave en de weergaven van kinderen heeft gecontroleerd op wijzigingen.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // Wordt aangeroepen net voordat de component uit de DOM wordt verwijderd. Het is de juiste plek om bronnen op te ruimen, zoals abonnementen, timers, of event listeners.
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
