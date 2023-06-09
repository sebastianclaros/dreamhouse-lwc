$userstory =  $args[0]
$description =  $args[1]
$dias = $args[2] ? $args[2]: 7
$definitionFile = $args[3] ? '.\config\scratch-with-omni.json' : '.\config\squada-scratch-def.json'
$email =  $userstory + '@teco.com.ar'

if ( $args[0] -AND $args[1] ) {
#    sf org list --clean --no-prompt
    git branch $userstory
    git checkout $userstory
    sf org create scratch -y $dias -a $userstory -d -w 10 --username $email --definition-file $definitionFile
    sfdx force:user:password:generate -u $userstory
    sfdx force:source:push -u $userstory
    sfdx force:user:permset:assign -n dreamhouse -u $userstory
    sf data import tree --plan .\data\sample-data-plan.json -u $userstory
    sfdx force:user:display
    sfdx force:apex:execute -u $userstory -f ..\apex\debugMode.apex
    if ( $omni ) {
        write-host("Instalar Omnistudio puede tardar mucho tiempo, revise el email")
        echo y | sf package install -u $userstory --package 04t5c000000o7RXAAY
    }
} else {
    write-host("createScratch story-id story-subject days isOmni.
    ejemplo createScratch BSCCC22 'Cambiar Funcionalidad' 30 Yes")
}