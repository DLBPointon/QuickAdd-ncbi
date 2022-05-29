# QuickAdd NCBI Taxonomy

This script was written to help my self get a grip with the Obsidian API
as well as improve my personal "Cool stuff i come across in my job" wiki.

My day job as a Bioinformatician, working in
ToLA and alongside GRIT at Sanger on the [DTOL](https://www.darwintreeoflife.org/) project, involves exposure to a number of
organisms which are just fascinating to read up on or in many cases to not read up on. 
For these organisms, I make a note to find extra information that would be useful to know during the assembly/curation phases, this might include karyotype information, existence of B chromosomes, duplication rates and more. This script goes towards generating notes with essential taxonomic information, used in conjunction with Obsidian, can eventually generate a web of linked notes connecting various species, clades and/or phyla.

This script was heavily based on another QuickAdd script found
[HERE](https://minimal.guide/Guides/Create+a+movie+database) written by [Christian B. B. Houmann](https://github.com/chhoumann)

## Future Plans
If there is enough interest I will create a full plugin to make use of the entirety of the NCBI API.

## Installation

This follows the same steps as other QuickAdd scripts.

### Step 1: Move the files

Move the quick-add-ncbi.js script to your obsidian vault script folder 
and the template to y0ur templates folder.

The template is already set out for all the data you can get back from ncbi.

### Step 2: Create the Macro

- Go to Obsidian Settings > QuickAdd

- Click Manage Macros

- Give your macro a name, e.g. "Taxon API"

- Click Configure on the macro

- Under User Scripts, select the "ncbi" script and click Add

- Click Template

    - Click on the cog next to Untitled Template Choice

    - Choose the ncbi template you copied across or use your own.

    - Enable File Name Format and use {{VALUE:scientificName}} as the file name. 
    The scientificName value takes the latin name of the organism

    - Decide on any other settings, such as the folder to create movie notes in

- Close all the popup modals and go back to the Settings > QuickAdd screen

- In the dropdown next to the Add Choice button choose Macro

    - Give your command a name like "Taxon" then click Add Choice

    - Click the cog next to your Taxon macro and choose the "Taxon API" macro you just created

    - Toggle the lightning bolt icon which will make this macro available from your main command palette

### Step 3: Create a note

- Launch the command palette with CMD + P (or your preferred hotkey)

- Type "Taxon" (i.e. the name of your macro command)

- Enter a scientific name

- You should automatically see a new note open with your template pre-filled

## Example

In my case running this on the little known __Tihpia femorata__ we get:

```markdown
# Tiphia femorata

## Taxonomic Data
### TaxID:: 330862
### RankOfQuery:: species
### Lineage:: [[Eukaryota]], [[Metazoa]], [[Ecdysozoa]], [[Arthropoda]],
                [[Hexapoda]], [[Insecta]], [[Pterygota]], [[Neoptera]],
                [[Endopterygota]], [[Hymenoptera]], [[Apocrita]], [[Aculeata]],
                [[Tiphioidea]], [[Tiphiidae]], [[Tiphiinae]], [[Tiphia]], [[]]

## Genetic Code
### GeneticCode:: 1
### MitoGeneticCode:: 5
```
